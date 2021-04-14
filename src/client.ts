import {example} from "./srpc.d/client/rpc.client.bundle";
import ExampleClient = example.ExampleClient;

const client = new ExampleClient('http://localhost:8080', {})
client.init().then(async example => {
  console.log(await example.hello());
  console.log(await example.hi('Example Name'));
})