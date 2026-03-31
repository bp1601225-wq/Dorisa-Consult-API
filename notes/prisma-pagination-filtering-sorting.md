# Prisma Pagination, Filtering & Sorting Overview

This note is a quick reference to help you reason through how Prisma handles pagination, filtering, and sorting in client queries. None of this is meant to be copied verbatim into production code—it's just a learning aid.

## 1. Pagination Patterns
Prisma exposes three pagination knobs on every indMany operation:
- skip: how many records to discard before returning results.
- 	ake: how many records to return (can be negative for reverse order).
- cursor: a pointer object that marks the starting record (usually by primary key). When you specify a cursor, you typically also set skip: 1 to avoid including the cursor row twice.

`	s
const page = await prisma.service.findMany({
  orderBy: { createdAt: 'desc' },
  cursor: { id: 'some-uuid' },
  skip: 1,
  take: 10,
})
`

This example asks for the 10 services immediately before the record with id of some-uuid, ordered by newest first.

## 2. Filtering Examples
Filtering is done through where clauses that mirror SQL predicates but stay type-safe. You can combine conditions with AND, OR, and NOT.

`	s
const filtered = await prisma.service.findMany({
  where: {
    AND: [
      { status: 'active' },
      { price: { gte: 100 } },
      { clientName: { contains: 'Acme', mode: 'insensitive' } },
    ],
  },
})
`

Use operators like gt, lt, contains, in, and startsWith to express ranges, partial matches, or set membership.

## 3. Sorting Basics
Prisma lets you sort on one or more fields via orderBy. You can also order by related data (e.g., service.owner.name).

`	s
const sorted = await prisma.service.findMany({
  orderBy: [
    { priority: 'asc' },
    { createdAt: 'desc' },
  ],
})
`

Order clauses execute in sequence just like SQL (first sort by priority, then by newest within the same priority).

## 4. Combining All Three
You often combine pagination, filtering, and sorting to build a list page.

`	s
const listResult = await prisma.service.findMany({
  where: {
    status: { in: ['active', 'pending'] },
    deliveredAt: { lt: new Date('2026-03-01') },
  },
  orderBy: { updatedAt: 'desc' },
  cursor: { id: lastSeenId },
  skip: 1,
  take: 25,
})
`

This query fetches the next 25 services in descending update order, only including active or pending records delivered before March 1, 2026, and paging forward from lastSeenId.

## 5. Tips
- Keep pagination consistent by always using the same orderBy when you rely on cursor.
- You can use count or ggregate queries to determine how many pages exist before issuing multiple indMany calls.
- When filtering, Prisma only includes 
ull comparisons if you explicitly use { equals: null }.
- Combine filtering with orderBy and cursor carefully; changing the order can shift which records are considered "next" in pagination.
