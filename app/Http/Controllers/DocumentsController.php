<?php

namespace App\Http\Controllers;
use App\Documents;
use Illuminate\Http\Request;
use Log;

class DocumentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Show all documents
        return response()->json(Documents::all(),200);
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Store the document details in the DB, save the file to the disk
        if($request->hasfile('filename'))
         {
            $file = $request->file('filename');
            $fileSize = filesize($file); // bytes
            $fileSize = round($fileSize / 1024, 2); // kilobytes 
            $originalFilename = $file->getClientOriginalName();
            $filename = time().$originalFilename;
            
            $file->move(public_path().'/files/', $filename);

            $fileExtension = pathinfo(public_path().'/files/'.$filename, PATHINFO_EXTENSION);
            //Log::info('File extension2:'.$fileExtension);            
            $file= new \App\Documents;
            $file->originalFilename = $originalFilename;
            $file->filename = $filename;
            $file->fileSize = $fileSize;
            $file->fileExtension = $fileExtension;
            $file->save();
         }
        return response()->json([
            'status' => (bool) $file,
            'data'   => $file,
            'message' => $file ? 'Document Created!' : 'Error Creating Document'
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Delete file and remove from the DB too
        $file = \App\Documents::find($id);
        
        // Log::info('File name:'.$file->filename);        
        
        $status = unlink(public_path().'/files/'.$file->filename);
        // only delete from DB if already removed from disk
        if ($status) {
            $status = $file->delete();
        }
        return response()->json([
            'status' => $status,
            'data' => $id,
            'message' => $status ? 'Document Deleted!' : 'Error Deleting Document'
        ]);
    }
}
