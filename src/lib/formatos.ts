// The upload formats on /recursos/catalogos/, by kind: the marquee under the import bento
// and the "Formatos" section both read this list. It mirrors the upload allow-list in
// terranode-backend (catalogs/processing.py), so a format added there is added here.
// `zip: true` marks the ones that only go inside a .zip; `faixa: false` keeps a repeat
// (the CSV and GeoPackage tables) out of the marquee.
export interface Formato {
  nome: string;
  ext: string;
  zip?: boolean;
  faixa?: boolean;
}

export const gruposDeFormatos: { nome: string; texto: string; formatos: Formato[] }[] = [
  {
    nome: "Dados vetoriais",
    texto: "Pontos, linhas e polígonos. Um arquivo com várias camadas vira várias camadas no catálogo.",
    formatos: [
      { nome: "Shapefile", ext: ".shp", zip: true },
      { nome: "GeoPackage", ext: ".gpkg" },
      { nome: "GeoJSON", ext: ".geojson .json" },
      { nome: "FlatGeobuf", ext: ".fgb" },
      { nome: "File Geodatabase", ext: ".gdb", zip: true },
      { nome: "MapInfo", ext: ".tab .mif", zip: true },
      { nome: "CSV com coordenadas", ext: ".csv" },
      { nome: "Planilha com coordenadas", ext: ".xlsx .ods" },
    ],
  },
  {
    nome: "Raster",
    texto: "Imagens, elevação e índices. Cada raster vira Cloud Optimized GeoTIFF e abre rápido no mapa.",
    formatos: [
      { nome: "GeoTIFF", ext: ".tif .tiff" },
      { nome: "ERDAS Imagine", ext: ".img" },
      { nome: "VRT", ext: ".vrt", zip: true },
    ],
  },
  {
    nome: "Tabulares",
    texto: "Tabelas sem coordenadas entram como fontes sem geometria, com tabela de atributos, e servem de base para um formulário. Cada aba da planilha vira uma fonte.",
    formatos: [
      { nome: "CSV", ext: ".csv", faixa: false },
      { nome: "Excel", ext: ".xlsx" },
      { nome: "OpenDocument", ext: ".ods" },
      { nome: "Tabela de GeoPackage", ext: ".gpkg", faixa: false },
    ],
  },
];

export const formatosDaFaixa = gruposDeFormatos
  .flatMap((g) => g.formatos)
  .filter((f) => f.faixa !== false)
  .map((f) => f.nome);
