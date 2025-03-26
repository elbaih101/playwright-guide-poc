import * as fs from 'fs';
import * as path from 'path';

export class PropertiesUtils {
    private properties: Record<string, string> = {};
    private directoryPaths: string[];

    constructor(directoryPaths: string[]) {
        this.directoryPaths = directoryPaths;
        this.loadProperties();
    }

    private loadProperties(): void {
        const files = this.directoryPaths.flatMap(dir => this.getAllPropertyFiles(dir));
        files.forEach(file => {
            const content = fs.readFileSync(file, 'utf-8');
            const fileProperties = content
                .split('\n')
                .filter(line => line.trim() && !line.startsWith('#'))
                .reduce((acc, line) => {
                    const [key, value] = line.split('=').map(part => part.trim());
                    if (key) acc[key] = value || '';
                    return acc;
                }, {} as Record<string, string>);
            this.properties = { ...this.properties, ...fileProperties };
        });
    }

    private getAllPropertyFiles(dir: string): string[] {
        let propertyFiles: string[] = [];
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                propertyFiles = propertyFiles.concat(this.getAllPropertyFiles(fullPath));
            } else if (file.endsWith('.prop') || file.endsWith('.properties')) {
                propertyFiles.push(fullPath);
            }
        });

        return propertyFiles;
    }

    public getProperty(key: string): string | undefined {
        return this.properties[key];
    }

    public setProperty(key: string, value: string): void {
        this.properties[key] = value;
        this.saveProperties();
    }

    public removeProperty(key: string): void {
        delete this.properties[key];
        this.saveProperties();
    }

    private saveProperties(): void {
        // Saving logic can be adjusted based on requirements.
        // For now, it saves all properties to a single file.
        const content = Object.entries(this.properties)
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');
        const outputFilePath = path.join(this.directoryPaths[0], 'merged.properties');
        fs.writeFileSync(outputFilePath, content, 'utf-8');
    }
}