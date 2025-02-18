while ($true) {
    git add .
    git commit -m "Auto update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin main
    Start-Sleep -Seconds 60  # انتظري 60 ثانية قبل تكرار العملية
}
