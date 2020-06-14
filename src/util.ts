import * as fs from 'fs';

export default function renameFileContent(
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
