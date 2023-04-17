function formatDate(str){
    var d = new Date(str);
    return d.toLocaleString("es-ES")
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};

function formatFileExtensionImage(mimetype){
    switch (mimetype) {
        case "image/jpeg":
          return '/imgs/icons/file-extensions/jpg.png';
        case "image/png":
          return '/imgs/icons/file-extensions/png.png';
        case "image/gif":
          return '/imgs/icons/file-extensions/gif.png';
        default:
          return '/imgs/icons/file-extensions/text.png';
      }
}

function formatFileExtensionImage(mimetype) {
    switch (mimetype) {
      case "application/illustrator":
        return "/imgs/icons/file-extensions/ai.png";
      case "video/x-msvideo":
        return "/imgs/icons/file-extensions/avi.png";
      case "application/vnd.ms-excel":
        return "/imgs/icons/file-extensions/xls.png";
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return "/imgs/icons/file-extensions/xlsx.png";
      case "application/x-tar":
      case "application/zip":
        return "/imgs/icons/file-extensions/zip.png";
      case "application/vnd.ms-powerpoint":
        return "/imgs/icons/file-extensions/ppt.png";
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return "/imgs/icons/file-extensions/pptx.png";
      case "application/postscript":
        return "/imgs/icons/file-extensions/ps.png";
      case "text/csv":
        return "/imgs/icons/file-extensions/csv.png";
      case "text/plain":
        return "/imgs/icons/file-extensions/text.png";
      case "audio/mpeg":
        return "/imgs/icons/file-extensions/mp3.png";
      case "audio/wav":
        return "/imgs/icons/file-extensions/wav.png";
      case "image/gif":
        return "/imgs/icons/file-extensions/gif.png";
      case "image/jpeg":
        return "/imgs/icons/file-extensions/jpg.png";
      case "image/png":
        return "/imgs/icons/file-extensions/png.png";
      case "application/pdf":
        return "/imgs/icons/file-extensions/pdf.png";
      case "application/vnd.visio":
        return "/imgs/icons/file-extensions/vsd.png";
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return "/imgs/icons/file-extensions/docx.png";
      case "application/msword":
        return "/imgs/icons/file-extensions/doc.png";
      case "video/mp4":
        return "/imgs/icons/file-extensions/mp4.png";
      default:
        return "/imgs/icons/file-extensions/text.png";
    }
  }
  