import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createProvider(value: MsgCreateProvider): {
            type_url: string;
            value: Uint8Array;
        };
        updateProvider(value: MsgUpdateProvider): {
            type_url: string;
            value: Uint8Array;
        };
        deleteProvider(value: MsgDeleteProvider): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createProvider(value: MsgCreateProvider): {
            typeUrl: string;
            value: MsgCreateProvider;
        };
        updateProvider(value: MsgUpdateProvider): {
            typeUrl: string;
            value: MsgUpdateProvider;
        };
        deleteProvider(value: MsgDeleteProvider): {
            typeUrl: string;
            value: MsgDeleteProvider;
        };
    };
    toJSON: {
        createProvider(value: MsgCreateProvider): {
            typeUrl: string;
            value: unknown;
        };
        updateProvider(value: MsgUpdateProvider): {
            typeUrl: string;
            value: unknown;
        };
        deleteProvider(value: MsgDeleteProvider): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createProvider(value: any): {
            typeUrl: string;
            value: MsgCreateProvider;
        };
        updateProvider(value: any): {
            typeUrl: string;
            value: MsgUpdateProvider;
        };
        deleteProvider(value: any): {
            typeUrl: string;
            value: MsgDeleteProvider;
        };
    };
    fromPartial: {
        createProvider(value: MsgCreateProvider): {
            typeUrl: string;
            value: MsgCreateProvider;
        };
        updateProvider(value: MsgUpdateProvider): {
            typeUrl: string;
            value: MsgUpdateProvider;
        };
        deleteProvider(value: MsgDeleteProvider): {
            typeUrl: string;
            value: MsgDeleteProvider;
        };
    };
};
