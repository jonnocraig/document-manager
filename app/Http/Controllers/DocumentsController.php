<?php

namespace App\Http\Controllers;
use App\Documents;
use Illuminate\Http\Request;

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
         } else {
             $originalFilename = 'test';
             $filename = 'test1';
             $fileSize = 1.34;
         }
        $file= new \App\Documents;
        $file->originalFilename = $originalFilename;
        $file->filename = $filename;
        $file->fileSize = $fileSize;
        $file->save();
        
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
        //
        $file = \App\Documents::find($id);
        $status = $file->delete();
        return response()->json([
            'status' => $status,
            'message' => $status ? 'Document Deleted!' : 'Error Deleting Document'
        ]);
    }
}
