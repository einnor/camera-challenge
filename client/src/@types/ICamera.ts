type ICamera = {
  height: number;
  width: number;
  imageQuality?: number;
  imageFormat?: 'image/webp' | 'image/png' | 'image/jpeg';
  imageSmoothingEnabled?: boolean;
  onCameraAccessFail: (error: any) => void;
  onCameraAccessSuccess(): void;
  onCaptureImageSuccess(image: any): void;
  onCaptureImageFail(): void;
}

export default ICamera;
