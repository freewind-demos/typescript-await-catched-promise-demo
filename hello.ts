async function asyncToUpperCase(name: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!name) {
                reject(new Error('Empty name'));
            }
            resolve(name.toUpperCase());
        }, 1000);
    })
}

async function main() {
    try {
        await asyncToUpperCase('').catch(error => {
            console.log("### error:", error)
            // NOTE should re-throw to catch again
            throw error
        })
    } catch (error) {
        console.log("### catch error again:", error)
    }
}

main()
