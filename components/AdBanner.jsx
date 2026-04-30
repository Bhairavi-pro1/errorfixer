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
        'key' : 'aef569c54412b99210cfcddce334527f',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://www.highperformanceformat.com/aef569c54412b99210cfcddce334527f/invoke.js"></script>
  </body>
</html>`;

  return (
    <div className="w-full py-6 flex justify-center">
      <div className="max-w-[728px] w-full min-h-[90px] flex justify-center items-center overflow-hidden">
        <iframe
          srcDoc={iframeHtml}
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden', backgroundColor: 'transparent' }}
          title="Advertisement"
        />
      </div>
    </div>
  );
}
