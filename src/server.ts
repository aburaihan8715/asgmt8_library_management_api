import app from './app';

const port = process.env.PORT || 5000;

async function main() {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

// call the function
main();
