import * as _155 from "./applications/transfer/v1/genesis";
import * as _156 from "./applications/transfer/v1/query";
import * as _157 from "./applications/transfer/v1/transfer";
import * as _158 from "./applications/transfer/v1/tx";
import * as _159 from "./applications/transfer/v2/packet";
import * as _160 from "./core/channel/v1/channel";
import * as _161 from "./core/channel/v1/genesis";
import * as _162 from "./core/channel/v1/query";
import * as _163 from "./core/channel/v1/tx";
import * as _164 from "./core/client/v1/client";
import * as _165 from "./core/client/v1/genesis";
import * as _166 from "./core/client/v1/query";
import * as _167 from "./core/client/v1/tx";
import * as _168 from "./core/commitment/v1/commitment";
import * as _169 from "./core/connection/v1/connection";
import * as _170 from "./core/connection/v1/genesis";
import * as _171 from "./core/connection/v1/query";
import * as _172 from "./core/connection/v1/tx";
import * as _173 from "./core/port/v1/query";
import * as _174 from "./core/types/v1/genesis";
import * as _175 from "./lightclients/localhost/v1/localhost";
import * as _176 from "./lightclients/solomachine/v1/solomachine";
import * as _177 from "./lightclients/solomachine/v2/solomachine";
import * as _178 from "./lightclients/tendermint/v1/tendermint";
import * as _234 from "./applications/transfer/v1/tx.amino";
import * as _235 from "./core/channel/v1/tx.amino";
import * as _236 from "./core/client/v1/tx.amino";
import * as _237 from "./core/connection/v1/tx.amino";
import * as _238 from "./applications/transfer/v1/tx.registry";
import * as _239 from "./core/channel/v1/tx.registry";
import * as _240 from "./core/client/v1/tx.registry";
import * as _241 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._234,
        ..._238
      };
      export const v2 = { ..._159
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._235,
        ..._239
      };
    }
    export namespace client {
      export const v1 = { ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._236,
        ..._240
      };
    }
    export namespace commitment {
      export const v1 = { ..._168
      };
    }
    export namespace connection {
      export const v1 = { ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._237,
        ..._241
      };
    }
    export namespace port {
      export const v1 = { ..._173
      };
    }
    export namespace types {
      export const v1 = { ..._174
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._175
      };
    }
    export namespace solomachine {
      export const v1 = { ..._176
      };
      export const v2 = { ..._177
      };
    }
    export namespace tendermint {
      export const v1 = { ..._178
      };
    }
  }
}