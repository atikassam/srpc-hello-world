declare class RpcServices {
    protected ___client: RpcClient;
    protected ___class_ctors: {};
    constructor(___client: RpcClient);
    _createInstance(class_name: any, state: any): Promise<any>;
}
declare class RpcClient<Service = undefined, ServicesType extends RpcServices = RpcServices> {
    protected url: string;
    protected headers: any;
    protected Services: any;
    protected services: ServicesType;
    private _map?;
    private _root?;
    private get map();
    private get root();
    constructor(url: string, headers: any, Services: any);
    init(): Promise<Service>;
    callMethod(instance: any, class_name: any, method_name: any, args: any): Promise<any>;
    private _decodeResponse;
    private _callMethod;
    private _encodeRequest;
    private _encodeWithType;
    private _getArgumentTypes;
    private _getRequestType;
    private _getReturnType;
    private _getMethodMetadata;
    private _getDataType;
}
export declare class Services extends RpcServices {
    protected ___client: RpcClient;
    constructor(___client: RpcClient);
    'example.Example': example.Example;
    ___class_ctors: {
        'example.Example': typeof example.Example;
    };
}
export declare namespace io.srpcd.types {
    interface EmptyClassData {
    }
}
export declare namespace example {
    class ExampleClient extends RpcClient<Example, Services> {
        protected url: string;
        protected headers: any;
        constructor(url: string, headers: any);
        init(): Promise<example.Example>;
    }
    class Example {
        private __rpc_client;
        private callMethod;
        private $___class_state;
        getData(): io.srpcd.types.EmptyClassData;
        __updateData(data: Partial<io.srpcd.types.EmptyClassData>): void;
        hello(): Promise<string>;
        hi(name: string): Promise<string>;
    }
}
export {};
