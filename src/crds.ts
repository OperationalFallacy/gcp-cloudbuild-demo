import { readFileSync, writeFileSync } from 'fs';

interface Item {
  spec: {
    names: {
      plural: string;
    };
  };
  [key: string]: any;
}

function main() {
  try {
    const data = readFileSync('src/config-connector.json', 'utf8');
    const json = JSON.parse(data);
    const items: Item[] = json.items;

    for (const item of items) {
      const fileName = item.spec.names.plural;
      writeFileSync(`src/crds/${fileName}.json`, JSON.stringify(item, null, 2));
    }

    console.log('Files written successfully');
  } catch (error) {
    console.error('Error reading or writing file', error);
  }
}

main();
