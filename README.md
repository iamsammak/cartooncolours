Cartoon Colours Woo!

Problems with jQuery getJSON using local files in Chrome

[Solved via](http://stackoverflow.com/questions/2541949/problems-with-jquery-getjson-using-local-files-in-chrome)
Another way to do it is to start a local HTTP server on your directory. On Ubuntu and MacOs with Python installed, it's a one-liner.

Go to the directory containing your web files, and :

python -m SimpleHTTPServer
Then connect to http://localhost:8000/index.html with any web browser to test your page.
