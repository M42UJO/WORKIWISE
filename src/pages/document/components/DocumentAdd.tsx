import { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const MyEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css'; 
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
    script.async = true;
    script.onload = () => {
      window.hljs.highlightAll();
    };
    document.body.appendChild(script);
  }, []);
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
          height: 767,
          menubar: true,
          plugins: [
            'codesample',
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
            'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image media | codesample code',
          // Add image resizing options
          image_dimensions: true,
          image_advtab: true,
          image_title: true,
          automatic_uploads: true,
          // Set default image dimensions
          image_default_size: {
            width: 800,
            height: 'auto'
          },
          // Add image upload handler
          images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              const img = new Image();
              img.onload = () => {
                // Create canvas for resizing
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Maximum dimensions
                const MAX_WIDTH = 800;
                const MAX_HEIGHT = 800;
                // Calculate new dimensions while maintaining aspect ratio
                if (width > height) {
                  if (width > MAX_WIDTH) {
                    height = Math.round(height * MAX_WIDTH / width);
                    width = MAX_WIDTH;
                  }
                } else {
                  if (height > MAX_HEIGHT) {
                    width = Math.round(width * MAX_HEIGHT / height);
                    height = MAX_HEIGHT;
                  }
                }
                canvas.width = width;
                canvas.height = height;
                // Draw resized image
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);
                // Convert to base64
                const resizedBase64 = canvas.toDataURL(blobInfo.blob().type, 0.9);
                
                console.log('Image resized:', {
                  originalSize: blobInfo.blob().size,
                  newSize: Math.round(resizedBase64.length * 0.75), // Approximate size in bytes
                  originalDimensions: `${img.width}x${img.height}`,
                  newDimensions: `${width}x${height}`
                });
                resolve(resizedBase64);
              };
              img.src = e.target?.result as string;
            };
            reader.readAsDataURL(blobInfo.blob());
          }),
          codesample_languages: [
            { text: 'HTML/XML', value: 'markup' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'CSS', value: 'css' },
            { text: 'Python', value: 'python' },
            { text: 'Java', value: 'java' },
            { text: 'C', value: 'c' },
            { text: 'C++', value: 'cpp' },
            { text: 'TypeScript', value: 'typescript' },
          ],
          content_style: `
            body { font-family:Arial, sans-serif; font-size:14px; }
            pre {
              background-color: #121212; 
              color: #f8f8f2; 
              padding: 15px;
              border-radius: 8px;
              font-family: 'Fira Code', monospace;
              overflow-x: auto;
            }
            code {
              font-family: 'Fira Code', monospace;
              color: #f8f8f2;
            }
            .hljs-keyword { color: #c792ea; } 
            .hljs-string { color: #a5e075; } 
            .hljs-comment { color: #5c6370; font-style: italic; } 
            .hljs-variable { color: #f07178; } 
            .hljs-function { color: #82aaff; } 
          `,
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};
export default MyEditor;