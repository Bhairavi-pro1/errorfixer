export default function AdBannerMobile() {
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
        'key' : '08c962ba39cc51ed22ba2dd21a43b419',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://www.highperformanceformat.com/08c962ba39cc51ed22ba2dd21a43b419/invoke.js"></script>
  </body>
</html>`;

  return (
    <div className="w-full py-4 flex justify-center">
      <div className="max-w-[320px] w-full min-h-[50px] flex justify-center items-center overflow-hidden">
        <iframe
          srcDoc={iframeHtml}
          width="320"
          height="50"
          style={{ border: 'none', overflow: 'hidden', backgroundColor: 'transparent' }}
          title="Mobile Advertisement"
        />
      </div>
    </div>
  );
}
