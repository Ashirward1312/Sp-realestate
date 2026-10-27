$ffmpeg = "C:\Users\ASHIRWAD\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
$imagesDir = "e:\realestate  Landing page\my-project\src\Component\Images"
$outputDir = "e:\realestate  Landing page\my-project\src\Component\Images\compressed"

# Create output directory
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$videos = Get-ChildItem -Path $imagesDir -Filter "*.mp4" -File

Write-Host "Found $($videos.Count) videos to compress..." -ForegroundColor Cyan

foreach ($video in $videos) {
    $outputFile = Join-Path $outputDir $video.Name
    $originalSizeMB = [math]::Round($video.Length / 1MB, 2)

    Write-Host ""
    Write-Host "Compressing: $($video.Name) ($originalSizeMB MB)" -ForegroundColor Yellow

    # H.264 CRF 28, scale to max 720p, fast preset, AAC audio 96k
    & $ffmpeg -i $video.FullName `
        -c:v libx264 -crf 28 -preset fast `
        -vf "scale='if(gt(iw,1280),1280,iw)':'if(gt(ih,720),720,ih)':flags=lanczos" `
        -c:a aac -b:a 96k `
        -movflags +faststart `
        -y $outputFile 2>&1 | Out-Null

    if (Test-Path $outputFile) {
        $newSizeMB = [math]::Round((Get-Item $outputFile).Length / 1MB, 2)
        $saving = [math]::Round((1 - $newSizeMB / $originalSizeMB) * 100, 0)
        Write-Host "  Done: $originalSizeMB MB -> $newSizeMB MB ($saving% smaller)" -ForegroundColor Green
    } else {
        Write-Host "  FAILED for $($video.Name)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "All videos compressed! Files saved to: $outputDir" -ForegroundColor Cyan

# Summary
$origTotal = ($videos | Measure-Object -Property Length -Sum).Sum / 1MB
$compFiles = Get-ChildItem $outputDir -Filter "*.mp4" -File
$compTotal = ($compFiles | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Total: $([math]::Round($origTotal, 1)) MB -> $([math]::Round($compTotal, 1)) MB" -ForegroundColor Magenta
