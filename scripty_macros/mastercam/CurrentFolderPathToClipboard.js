var { currentPath } = $.apps.mastercam;

clip.SetText(currentPath);

$.toast(currentPath, "Copied To Clipboard");
