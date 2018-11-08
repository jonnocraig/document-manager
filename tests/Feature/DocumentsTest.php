<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DocumentsTest extends TestCase
{
    /**
     * A suite of simple tests to ensure our api endpoints are working as expected
     *
     */
    public function testDocumentStore()
    {
        $response = $this->json('POST', '/api/documents', [
            'filename' => UploadedFile::fake()->image('image.jpg')
        ]);
        $response->assertStatus(200);
        $this->assertNotNull($response->getData());
    }

    public function testGettingAllDocuments()
    {
        $response = $this->json('GET', '/api/documents');
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                [
                        'id',
                        'filename',
                        'originalFilename',
                        'fileSize',
                        'created_at',
                        'updated_at'
                ]
            ]
        );
    }

    public function testDeleteDocument()
    {
        $response = $this->json('GET', '/api/documents');
        $response->assertStatus(200);

        $document = $response->getData()[0];

        $user = factory(\App\User::class)->create();
        $delete = $this->actingAs($user, 'api')->json('DELETE', '/api/documents/'.$document->id);
        $delete->assertStatus(200);
        $delete->assertJson(['message' => "Document Deleted!"]);
    }
}
