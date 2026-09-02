<#
.SYNOPSIS
  Servidor local de desenvolvimento leve e de zero dependências para o Portfólio.
  Funciona nativamente no Windows sem precisar de Node.js ou pacotes externos.
#>

$port = 3000
$url = "http://localhost:$port/"
$root = $PSScriptRoot

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " Servidor local iniciado com sucesso!" -ForegroundColor Green
    Write-Host " Acesse no seu navegador: $url" -ForegroundColor Cyan
    Write-Host " Pressione Ctrl + C para encerrar o servidor" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green

    # Abrir navegador automaticamente
    Start-Process $url

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
        if ($rawPath -eq "/" -or $rawPath -eq "") {
            $rawPath = "/index.html"
        }

        $localPath = Join-Path $root ($rawPath.TrimStart('/').Replace('/', '\'))

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime
            
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo não encontrado: $rawPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.Close()
    }
} catch {
    Write-Host "Erro ou encerramento: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
    $listener.Close()
}
