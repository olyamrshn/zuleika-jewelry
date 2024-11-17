/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as JewelleryImport } from './routes/jewellery'
import { Route as DeferredImport } from './routes/deferred'
import { Route as ContactImport } from './routes/contact'
import { Route as BijouxDespaceImport } from './routes/bijoux-despace'
import { Route as AtelierImport } from './routes/atelier'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as CollectionNameImport } from './routes/collection/$name'
import { Route as CollectionNameIndexImport } from './routes/collection/$name.index'
import { Route as CollectionNameAboutImport } from './routes/collection/$name.about'
import { Route as CollectionNameProductIdImport } from './routes/collection/$name.product.$id'

// Create/Update Routes

const JewelleryRoute = JewelleryImport.update({
  path: '/jewellery',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const BijouxDespaceRoute = BijouxDespaceImport.update({
  path: '/bijoux-despace',
  getParentRoute: () => rootRoute,
} as any)

const AtelierRoute = AtelierImport.update({
  path: '/atelier',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CollectionNameRoute = CollectionNameImport.update({
  path: '/collection/$name',
  getParentRoute: () => rootRoute,
} as any)

const CollectionNameIndexRoute = CollectionNameIndexImport.update({
  path: '/',
  getParentRoute: () => CollectionNameRoute,
} as any)

const CollectionNameAboutRoute = CollectionNameAboutImport.update({
  path: '/about',
  getParentRoute: () => CollectionNameRoute,
} as any)

const CollectionNameProductIdRoute = CollectionNameProductIdImport.update({
  path: '/product/$id',
  getParentRoute: () => CollectionNameRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/atelier': {
      id: '/atelier'
      path: '/atelier'
      fullPath: '/atelier'
      preLoaderRoute: typeof AtelierImport
      parentRoute: typeof rootRoute
    }
    '/bijoux-despace': {
      id: '/bijoux-despace'
      path: '/bijoux-despace'
      fullPath: '/bijoux-despace'
      preLoaderRoute: typeof BijouxDespaceImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/jewellery': {
      id: '/jewellery'
      path: '/jewellery'
      fullPath: '/jewellery'
      preLoaderRoute: typeof JewelleryImport
      parentRoute: typeof rootRoute
    }
    '/collection/$name': {
      id: '/collection/$name'
      path: '/collection/$name'
      fullPath: '/collection/$name'
      preLoaderRoute: typeof CollectionNameImport
      parentRoute: typeof rootRoute
    }
    '/collection/$name/about': {
      id: '/collection/$name/about'
      path: '/about'
      fullPath: '/collection/$name/about'
      preLoaderRoute: typeof CollectionNameAboutImport
      parentRoute: typeof CollectionNameImport
    }
    '/collection/$name/': {
      id: '/collection/$name/'
      path: '/'
      fullPath: '/collection/$name/'
      preLoaderRoute: typeof CollectionNameIndexImport
      parentRoute: typeof CollectionNameImport
    }
    '/collection/$name/product/$id': {
      id: '/collection/$name/product/$id'
      path: '/product/$id'
      fullPath: '/collection/$name/product/$id'
      preLoaderRoute: typeof CollectionNameProductIdImport
      parentRoute: typeof CollectionNameImport
    }
  }
}

// Create and export the route tree

interface CollectionNameRouteChildren {
  CollectionNameAboutRoute: typeof CollectionNameAboutRoute
  CollectionNameIndexRoute: typeof CollectionNameIndexRoute
  CollectionNameProductIdRoute: typeof CollectionNameProductIdRoute
}

const CollectionNameRouteChildren: CollectionNameRouteChildren = {
  CollectionNameAboutRoute: CollectionNameAboutRoute,
  CollectionNameIndexRoute: CollectionNameIndexRoute,
  CollectionNameProductIdRoute: CollectionNameProductIdRoute,
}

const CollectionNameRouteWithChildren = CollectionNameRoute._addFileChildren(
  CollectionNameRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/atelier': typeof AtelierRoute
  '/bijoux-despace': typeof BijouxDespaceRoute
  '/contact': typeof ContactRoute
  '/deferred': typeof DeferredRoute
  '/jewellery': typeof JewelleryRoute
  '/collection/$name': typeof CollectionNameRouteWithChildren
  '/collection/$name/about': typeof CollectionNameAboutRoute
  '/collection/$name/': typeof CollectionNameIndexRoute
  '/collection/$name/product/$id': typeof CollectionNameProductIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/atelier': typeof AtelierRoute
  '/bijoux-despace': typeof BijouxDespaceRoute
  '/contact': typeof ContactRoute
  '/deferred': typeof DeferredRoute
  '/jewellery': typeof JewelleryRoute
  '/collection/$name/about': typeof CollectionNameAboutRoute
  '/collection/$name': typeof CollectionNameIndexRoute
  '/collection/$name/product/$id': typeof CollectionNameProductIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/atelier': typeof AtelierRoute
  '/bijoux-despace': typeof BijouxDespaceRoute
  '/contact': typeof ContactRoute
  '/deferred': typeof DeferredRoute
  '/jewellery': typeof JewelleryRoute
  '/collection/$name': typeof CollectionNameRouteWithChildren
  '/collection/$name/about': typeof CollectionNameAboutRoute
  '/collection/$name/': typeof CollectionNameIndexRoute
  '/collection/$name/product/$id': typeof CollectionNameProductIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/atelier'
    | '/bijoux-despace'
    | '/contact'
    | '/deferred'
    | '/jewellery'
    | '/collection/$name'
    | '/collection/$name/about'
    | '/collection/$name/'
    | '/collection/$name/product/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/atelier'
    | '/bijoux-despace'
    | '/contact'
    | '/deferred'
    | '/jewellery'
    | '/collection/$name/about'
    | '/collection/$name'
    | '/collection/$name/product/$id'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/atelier'
    | '/bijoux-despace'
    | '/contact'
    | '/deferred'
    | '/jewellery'
    | '/collection/$name'
    | '/collection/$name/about'
    | '/collection/$name/'
    | '/collection/$name/product/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AtelierRoute: typeof AtelierRoute
  BijouxDespaceRoute: typeof BijouxDespaceRoute
  ContactRoute: typeof ContactRoute
  DeferredRoute: typeof DeferredRoute
  JewelleryRoute: typeof JewelleryRoute
  CollectionNameRoute: typeof CollectionNameRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AtelierRoute: AtelierRoute,
  BijouxDespaceRoute: BijouxDespaceRoute,
  ContactRoute: ContactRoute,
  DeferredRoute: DeferredRoute,
  JewelleryRoute: JewelleryRoute,
  CollectionNameRoute: CollectionNameRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/atelier",
        "/bijoux-despace",
        "/contact",
        "/deferred",
        "/jewellery",
        "/collection/$name"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/atelier": {
      "filePath": "atelier.tsx"
    },
    "/bijoux-despace": {
      "filePath": "bijoux-despace.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/jewellery": {
      "filePath": "jewellery.tsx"
    },
    "/collection/$name": {
      "filePath": "collection/$name.tsx",
      "children": [
        "/collection/$name/about",
        "/collection/$name/",
        "/collection/$name/product/$id"
      ]
    },
    "/collection/$name/about": {
      "filePath": "collection/$name.about.tsx",
      "parent": "/collection/$name"
    },
    "/collection/$name/": {
      "filePath": "collection/$name.index.tsx",
      "parent": "/collection/$name"
    },
    "/collection/$name/product/$id": {
      "filePath": "collection/$name.product.$id.tsx",
      "parent": "/collection/$name"
    }
  }
}
ROUTE_MANIFEST_END */
