// Crop image to 1x1 aspect ratio,
// then convert to a base64 string.
export default function cropImage(file) {
  console.log(file)
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onerror = error => reject(error)
    reader.onload = () => {
      canvasCropResolution(reader.result, 400, 1).then(image => {
        resolve(image)
      })
    }
  })
}

function canvasCropResolution(url, resolution, aspectRatio) {
  return new Promise((resolve) => {
      const inputImage = new Image()
      inputImage.onload = () => {
          const inputImageAspectRatio = inputImage.naturalWidth / inputImage.naturalHeight
          const inputWidth = resolution * inputImageAspectRatio
          const inputHeight = resolution
          let outputWidth = inputWidth
          let outputHeight = inputHeight
          if (inputImageAspectRatio > aspectRatio) {
              outputWidth = inputHeight * aspectRatio
          } else if (inputImageAspectRatio < aspectRatio) {
              outputHeight = inputWidth / aspectRatio
          }
          const outputX = (outputWidth - inputWidth) * 0.5
          const outputY = (outputHeight - inputHeight) * 0.5
          const outputImage = document.createElement('canvas')
          outputImage.width = outputWidth
          outputImage.height = outputHeight
          const ctx = outputImage.getContext('2d')
          ctx.drawImage(inputImage, outputX, outputY, inputWidth, inputHeight)
          resolve(outputImage.toDataURL())
      }
      inputImage.src = url
  })
}

function canvasCropAspectRatio(url, aspectRatio) {
  return new Promise((resolve) => {
      const inputImage = new Image()
      inputImage.onload = () => {
          const inputWidth = inputImage.naturalWidth
          const inputHeight = inputImage.naturalHeight
          const inputImageAspectRatio = inputWidth / inputHeight
          let outputWidth = inputWidth
          let outputHeight = inputHeight
          if (inputImageAspectRatio > aspectRatio) {
              outputWidth = inputHeight * aspectRatio
          } else if (inputImageAspectRatio < aspectRatio) {
              outputHeight = inputWidth / aspectRatio
          }
          const outputX = (outputWidth - inputWidth) * 0.5
          const outputY = (outputHeight - inputHeight) * 0.5
          const outputImage = document.createElement('canvas')
          outputImage.width = outputWidth
          outputImage.height = outputHeight
          const ctx = outputImage.getContext('2d')
          ctx.drawImage(inputImage, outputX, outputY)
          resolve(outputImage.toDataURL())
      }
      inputImage.src = url
  })
}