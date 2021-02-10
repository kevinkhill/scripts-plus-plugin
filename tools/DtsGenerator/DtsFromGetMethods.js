(function (outfile) {
  function mapReturnType(type) {
    const typeAliases = {
      Void: "void",
      Boolean: "boolean",
      Int16: "System.Int16",
      Int32: "System.Int32",
      IntPtr: "System.IntPtr",
      UInt32: "System.UInt32",
      String: "System.String",
      Point: "System.Drawing.Point",
      //SystemWindow: "System.SystemWindow",
      Rectangle: "System.Drawing.Rectangle",
      RectRegion: "System.Drawing.RectRegion",
      "RectRegion[]": "System.Drawing.RectRegion[]",
      SystemWindow: "StrokesPlus.net.Engine.SystemWindow",
      "SystemWindow[]": "StrokesPlus.net.Engine.SystemWindow[]",
      HistoryScript: "StrokesPlus.net.Engine.HistoryScript",
      PopupMenuInfo: "StrokesPlus.net.Engine.PopupMenuInfo",
      PopupMenuInfoEx: "StrokesPlus.net.Engine.PopupMenuInfoEx",
      CoreAudioDevice: "StrokesPlus.net.Engine.CoreAudioDevice",
    };

    if (Object.prototype.hasOwnProperty.call(typeAliases, type)) {
      return typeAliases[type];
    } else {
      return type;
    }
  }

  const spms = sp.GetMethods();

  let s = `/**
* This file was generated by parsing the output of sp.GetMethods()
*/
declare namespace Microsoft {
  namespace Win32 {
  interface RegistryKey {}
  }

  namespace Forms {
  interface MouseButtons {}
  }
}

declare namespace WindowsInput.Native {
  interface VirtualKeyCode {}
}

declare namespace ManagedWinapi.Windows {
  interface SystemWindow {}
}

declare namespace System {
  type Object = any;
  type Int16 = number;
  type Int32 = number;
  type UInt32 = number;
  type IntPtr = number;
  type String = string;
  type Boolean = boolean;

  namespace Drawing {
  interface Image {}
  interface Point {}
  interface Rectangle {}
  interface RectRegion {}
  }

  namespace Windows.Forms {
  interface MouseButtons {}
  }

  interface SystemWindow {}
}

declare namespace StrokesPlus {
  namespace net.Engine {
  interface InputBoxInfo {}
  interface SystemWindow {}
  interface HistoryScript {}
  interface PopupMenuInfo {}
  interface PopupMenuInfoEx {}
  interface DisplayTextInfo {}
  interface CoreAudioDevice {}
  }
}

// Unknown Base Types
declare type Timer = any;
declare type Color = any;
declare type MethodInfo = any;

declare interface Sp {
`;

  for (var m = 0; m < spms.Count(); m++) {
    const methodName = spms[m].Name;
    const returnType = mapReturnType(spms[m].ReturnType.Name);

    s += "  " + methodName + "(";

    let comma = "";

    for (var i = 0; i < spms[m].GetParameters().Count(); i++) {
      const parameters = spms[m].GetParameters();
      const paramName = parameters[i].Name;
      const paramType = parameters[i].ParameterType.ToString();

      s += comma + paramName + ": " + paramType.replace(/&$/, "");

      comma = ", ";
    }

    s += "): " + returnType + ";\n";
  }

  s += "}\n\n";
  s += "declare const sp:Sp;\n";

  File.WriteAllText(outfile, s);
  sp.ShowBalloonTip("ScriptsPlus", `Wrote to ${outfile}`, "Info", 5000);
});
