/// <reference types="node" />
import * as protobufjs from 'protobufjs';
import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";
export interface SrpcServerOptions {
    enable_cors: boolean;
}
interface RpcProcessCtx {
    rpc_processor: RpcProcessor;
    protocol: 'http';
    headers: any;
    raw: {
        class: string;
        method: string;
        state: protobufjs.Buffer;
        args: protobufjs.Buffer;
    };
    protobuf: protobufjs.Root;
    def_map: any;
    [key: string]: any;
}
declare class RpcProcessor {
    private def_map;
    private root;
    createCtx(_class: any, _method: any, _state: any, _args: any, _opts: {
        headers: any;
    }): RpcProcessCtx;
    use(method: any): void;
    process(...args: any[]): void;
}
export declare type RpcErrorHandler = (e: any) => Promise<{
    code: number;
    message: string;
    error: any;
}>;
declare class SrpcServer<SrpcClasses> {
    private implementations;
    private options?;
    private _map?;
    private _root?;
    private errorHandler?;
    private get map();
    private get root();
    constructor(implementations: SrpcClasses);
    setErrorHandler(fnc: RpcErrorHandler): this;
    private init;
    createServer(options?: {
        enable_cors: boolean;
    }): http.Server;
    useExpressHandler: (req: IncomingMessage, res: ServerResponse) => void;
    useKoaHandler: (ctx: {
        req: IncomingMessage;
        res: ServerResponse;
    }) => void;
    private requestHandler;
    private enableCors;
    protected callMethod(ctx: RpcProcessCtx): Promise<Uint8Array>;
    private _runInterceptors;
    private _decodeRequest;
    private decode;
    private _callMethod;
    private _encodeResponse;
    private _getArgumentTypes;
    private _getRequestType;
    private _getReturnType;
    private _getMethodMetadata;
    private _getDataType;
}
interface SrpcClasses {
    'example.Example': typeof example.Example;
}
export declare namespace io.srpcd.types {
    interface EmptyClassData {
    }
}
export declare namespace example {
    abstract class Example {
        protected getCtx(): any;
        private $___class_state;
        constructor(data: io.srpcd.types.EmptyClassData);
        getData(): io.srpcd.types.EmptyClassData;
        updateData(data: Partial<io.srpcd.types.EmptyClassData>): void;
        abstract hello(): Promise<string>;
        abstract hi(name: string): Promise<string>;
    }
    class ExampleSrpc extends SrpcServer<SrpcClasses> {
        constructor(classes: SrpcClasses);
    }
}
export {};
