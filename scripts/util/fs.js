exports.codeFolder = (() => {
  // This path will target in GitBox root dir, will like below:
  // /private/var/mobile/Containers/Shared/AppGroup/a-hash-path/JSBox/Code/GitBox
  const path = $file.absolutePath("../../");
  const comps = path.split("/");
  comps.pop();
  return comps.join("/");
})();