import Link from "next/link"
import { notFound } from "next/navigation"
import { Item } from "@radix-ui/react-accordion"
import { allDocs } from "contentlayer/generated"
import { ChevronRight } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { getTableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"
import Mdx from "@/components/mdx-components"
import { TableOfContents } from "@/components/toc"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

function getPathFromSlug(slug: string) {
  const pathVariables = slug.split("/")
  pathVariables.shift()

  console.log(pathVariables)

  return (
    <>
      {pathVariables.map((item, index) => {
        item = item.replace(/\-+/g, " ").toLowerCase()

        return (
          <>
            <div
              className={cn(
                "overflow-hidden text-ellipsis whitespace-nowrap capitalize",
                {
                  "font-medium text-foreground":
                    index === pathVariables.length - 1,
                }
              )}
            >
              {item}
            </div>
            {index < pathVariables.length - 1 && (
              <ChevronRight className="h-4 w-4" />
            )}
          </>
        )
      })}
    </>
  )
}

export default async function DocsPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          {getPathFromSlug(doc.slug)}
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8 max-w-[65ch]">
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-8">
            <ScrollArea className="pb-10">
              <TableOfContents toc={toc} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
