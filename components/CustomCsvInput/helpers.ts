export function getCSVStringFrom(csvFile:File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        if(!event.target) {
          reject('Error reading file');
          return;
        }
        if(typeof event.target.result !== 'string') {
          reject('File content is not a string');
          return;
        }
        resolve(event.target.result)
      };
      reader.onerror = error => reject(error);
      reader.readAsText(csvFile);
    });
  }