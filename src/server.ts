import {example} from "./srpc.d/server/rpc.server.bundle";
import ExampleSrpc = example.ExampleSrpc;

class Example extends example.Example {
  hi(name: string): Promise<string> {
    return Promise.resolve(`Hello, ${name}`);
  }

  async hello(): Promise<string> {
    return "Hello world";
  }
}

function hi() {

}

const server = new ExampleSrpc({
  "example.Example": Example,
})

server.createServer({ enable_cors: true })
  .listen(8080)