$docxPath = $args[0]
$outPath = $args[1]
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry('word/document.xml')
$reader = New-Object System.IO.StreamReader($entry.Open())
$xmlContent = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$doc = [xml]$xmlContent
$ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$nodes = $doc.SelectNodes('//w:t', $ns)
$text = ($nodes | ForEach-Object { $_.InnerText }) -join ''
$text -replace '\s+', ' ' | Set-Content -Path $outPath -Encoding UTF8
