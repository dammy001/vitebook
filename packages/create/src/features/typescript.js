// @ts-check

/**
 * @param {import('../ProjectBuilder').ProjectBuilder} builder
 */
export function addTypescriptFeature(builder) {
  if (!builder.hasFeature('typescript')) return;

  builder.pkg.addDependency('typescript', '^4.4.0', { dev: true });

  const preact = builder.framework === 'preact';

  const config = getRawTSConfig({
    jsx: preact ? 'react-jsx' : 'preserve',
    jsxImportSource: preact ? 'preact' : undefined,
  });

  builder.dirs.dest.root.writeFile(
    'tsconfig.json',
    JSON.stringify(config, null, 2),
  );
}

export function getRawTSConfig(compilerOptions = {}) {
  return {
    compilerOptions: {
      allowJs: true,
      allowSyntheticDefaultImports: true,
      allowUnreachableCode: false,
      alwaysStrict: true,
      checkJs: true,
      declaration: true,
      declarationMap: true,
      esModuleInterop: true,
      experimentalDecorators: true,
      forceConsistentCasingInFileNames: true,
      jsx: 'preserve',
      jsxImportSource: 'preact',
      lib: ['dom', 'dom.iterable', 'esnext'],
      module: 'esnext',
      moduleResolution: 'node',
      newLine: 'lf',
      noImplicitAny: false,
      noImplicitReturns: true,
      noUnusedLocals: false,
      noUnusedParameters: false,
      preserveWatchOutput: true,
      resolveJsonModule: true,
      skipLibCheck: true,
      sourceMap: true,
      strict: true,
      strictNullChecks: true,
      target: 'esnext',
      useDefineForClassFields: false,
      types: ['node'],
      ...compilerOptions,
    },
    include: ['src'],
  };
}
