// export function stringToArrayBuffer(str: string): Uint8Array {
//   let bufView = new Uint8Array(new ArrayBuffer(str.length * 2));

//   for (let i: number = 0; i < str.length; i++) {
//     bufView[i] = str.charCodeAt(i);
//   }

//   return bufView;
// }

// export function arrayBufferToString(buf: ArrayBuffer): string {
//   let binary = '';
//   let bytes = new Uint8Array(buf);
//   for (var i = 0; i < bytes.byteLength; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return binary;
// }

export function arrayBufferToStringUint16(buf: ArrayBuffer) {
  let binary = '';
  let bytes: Uint16Array = new Uint16Array(buf.slice(0, buf.byteLength - (buf.byteLength % 2)));
  let len = bytes.byteLength;
  for (var i = 0; i < len;) {
    binary += String.fromCharCode(bytes[i++]);
  }
  return binary;
}

export function stringToArrayBufferUint16(str: string): Uint16Array {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each character
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
}

export function imageToDataURL(file: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      if (e.target?.error) reject({ error: e.target?.error });
      else resolve({ result: e.target?.result });
    };

    fileReader.readAsDataURL(file);
  });
}

export function imageToArrayBuffer(file: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      if (e.target?.error) reject({ error: e.target?.error });
      else resolve({ result: e.target?.result });
    };

    fileReader.readAsArrayBuffer(file);
  });
}

export async function fetchFromFileURL(url: RequestInfo | URL) {
  return await fetch(url);
}

export async function fileImageURLGetBlob(url: RequestInfo | URL) {
  const getFile = await fetchFromFileURL(url);

  return await getFile.blob();
}
