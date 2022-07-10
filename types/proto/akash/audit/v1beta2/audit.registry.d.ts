import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        signProviderAttributes(value: MsgSignProviderAttributes): {
            type_url: string;
            value: Uint8Array;
        };
        deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        signProviderAttributes(value: MsgSignProviderAttributes): {
            typeUrl: string;
            value: MsgSignProviderAttributes;
        };
        deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
            typeUrl: string;
            value: MsgDeleteProviderAttributes;
        };
    };
    toJSON: {
        signProviderAttributes(value: MsgSignProviderAttributes): {
            typeUrl: string;
            value: unknown;
        };
        deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        signProviderAttributes(value: any): {
            typeUrl: string;
            value: MsgSignProviderAttributes;
        };
        deleteProviderAttributes(value: any): {
            typeUrl: string;
            value: MsgDeleteProviderAttributes;
        };
    };
    fromPartial: {
        signProviderAttributes(value: MsgSignProviderAttributes): {
            typeUrl: string;
            value: MsgSignProviderAttributes;
        };
        deleteProviderAttributes(value: MsgDeleteProviderAttributes): {
            typeUrl: string;
            value: MsgDeleteProviderAttributes;
        };
    };
};
