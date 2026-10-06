export default function AdBanner() {
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
        'key' : 'e2051dca3c2bb317ee62af29706f4816',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://www.highperformanceformat.com/e2051dca3c2bb317ee62af29706f4816/invoke.js"></script>
  </body>
</html>`;

  return (
    <div className="w-full py-6 flex justify-center">
      <div className="max-w-[728px] w-full min-h-[90px] flex justify-center items-center overflow-hidden">
        <iframe
          srcDoc={iframeHtml}
          width="728"
          height="90"
          style={{ border: 'none', overflow: 'hidden', backgroundColor: 'transparent' }}
          title="Advertisement"
        />
      </div>
    </div>
  );
}
