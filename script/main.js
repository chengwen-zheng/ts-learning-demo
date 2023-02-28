
const prompts = require('prompts');

const cmdMap = {
    newType: async (newType) => {
        if (!hookName) return;
    }
}

async function main() {
    const argv = process.argv;
    const command = argv[2];
    assert(Object.keys(cmdMap).includes(command), '暂不识别的指令');
    if (command === "newType") {
        const response = await prompts({
          type: 'text',
          name: 'name',
          message: '请输入type名称'
        }).catch((e) => { console.error(e); exitProcess(); });
        cmdMap[command](response.name).catch((e) => { console.log(e); exitProcess(); });
      }
}

main();