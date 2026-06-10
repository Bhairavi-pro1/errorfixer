export default function AdSidebar() {
  const iframeHtml = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : 'b90c099ee17a36286a02b5f60fecf58a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://www.highperformanceformat.com/b90c099ee17a36286a02b5f60fecf58a/invoke.js"></script>
  </body>
</html>`;

  return (
    <div className="w-[160px] h-[600px] flex justify-center items-center overflow-hidden bg-surface-low border border-outline-variant rounded-md shadow-md">
      <iframe
        srcDoc={iframeHtml}
        width="160"
        height="600"
        frameBorder="0"
        scrolling="no"
        style={{ border: 'none', overflow: 'hidden', backgroundColor: 'transparent' }}
        title="Sidebar Advertisement"
      />
    </div>
  );
}
