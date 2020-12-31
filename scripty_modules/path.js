function toUNC(abspath) {
  if (abspath.startsWith("Z")) {
    return abspath.replace(/^Z\:/, "\\\\hbdatavm\\cnc");
  } else if (abspath.startsWith("V")) {
    return abspath.replace(/^V\:/, "\\\\hbdatavm\\cnc\\Program Vault");
  } else {
    return abspath;
  }
}
  
function join(path1, path2) {
  return clr.System.IO.Path.Combine(path1, path2);
}

module.exports = {
  join,
  toUNC
};
