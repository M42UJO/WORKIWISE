import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const MyEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleExportHTML = () => {
    console.log('Exported HTML:', editorContent);
  };

  return (
    <>
      <Editor
        apiKey="bs1n217gogt1vizmjiodh3bo5g1jpr07poz3tk7ix0r0vlr6"
        value={editorContent}
        init={{
          width: '100%',
          height: '100%',
          menubar: true,
          plugins: [
            'code',
            'image',
            'link',
            'media',
            'lists',
            'table',
            'charmap',
            'searchreplace',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image media | code',
          content_style:
            'body { font-family:Arial, sans-serif; font-size:14px; }',
          file_picker_callback: (callback, value, meta) => {
            if (meta.filetype === 'image') {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.click();
              input.onchange = (e: any) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  callback(reader.result as string, { alt: file.name });
                };
                reader.readAsDataURL(file);
              };
            }
          },
        }}
        onEditorChange={handleEditorChange}
      />

      <div className="mt-4">
        <button
          onClick={handleExportHTML}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export HTML
        </button>
      </div>
    </>
  );
};

export default MyEditor;
