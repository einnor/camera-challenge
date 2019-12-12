type ICamera = {
  height?: number;
  width?: number;
  onCameraAccessFail: (error: any) => void;
  onCameraAccessSuccess(): void;
}

export default ICamera;
