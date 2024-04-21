
// For Development purposes only, Delete before production deployment !..
async function main() {
    try {
      // Add function to run in terminal
    } catch (error) {
        console.log(error);
    }
}
  
  main()
    .then(async () => {
    })
    .catch(async (e) => {
      console.error(e)
      process.exit(1)
    })