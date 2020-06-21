import * as fs from 'fs';

export function renameFileContent(
  destination: string,
  filename: string,
  content: { [key: string]: string },
): void {
  const path = `${destination}/${filename}`;
  const rawData = (fs.readFileSync(path) as unknown) as string;
  const packageData = JSON.parse(rawData);
  Object.entries(content).forEach(([key, value]) => {
    packageData[key] = value;
  });
  fs.writeFileSync(path, JSON.stringify(packageData, null, 2));
}

export function readFromFile(
  destination: string,
  filename: string,
  key: string,
): { [key: string]: string } {
  const path = `${destination}/${filename}`;
  const rawData = (fs.readFileSync(path) as unknown) as string;
  const packageData = JSON.parse(rawData);
  return packageData[key];
}

export function appendToFile(
  destination: string,
  filename: string,
  key: string,
  values: { [key: string]: string },
): void {
  const path = `${destination}/${filename}`;
  const rawData = (fs.readFileSync(path) as unknown) as string;
  const packageData = JSON.parse(rawData);
  Object.entries(values).forEach(([packageName, packageValue]) => {
    packageData[key][packageName] = packageValue;
  });
  fs.writeFileSync(path, JSON.stringify(packageData, null, 2));
}

export function appendLineToFile(
  path: string,
  where: string,
  newLine: string,
): void {
  const allLines = fs.readFileSync(path, 'utf8').toString().split('\n');
  fs.writeFileSync(path, '');
  allLines.forEach((line) => {
    let fileNewLine = line;
    if (line.includes(where)) {
      fileNewLine += `\n${newLine}\n`;
    }
    fs.appendFileSync(path, `${fileNewLine.toString()}\n`);
  });
}
