---
title: "Transactions"
description: "Entering transactions with double-entry."
sidebar:
  order: 1
---

Every transaction balances: the app checks it, and so does the database. Each posted transaction has at least
two lines that add up to zero.

**Posted transactions are never edited in place.** To fix one, void it and enter it again, so the history
stays intact.

## Accounts

Accounts are the buckets your money is sorted into: bank accounts and cash you have, cards and loans you owe, and the kinds of money coming in and going out. Every transaction moves money between two or more of them, so pick the account that best describes where money came from and where it went. **Archive** an account you no longer use instead of deleting it, so past reports stay correct.

## Entering a transaction

Select **New transaction**. For everyday money in and out, choose the date, the bank or cash account, the other account (what it was for), the amount and a description; OpenLedgerApp writes both sides for you. **Advanced entry** lets you split one transaction across several accounts, funds or projects. Add a [fund, project, category or tags](/ledger/nonprofit/funds-and-budgets/) to say more about it.

## Fixing a mistake

Posted transactions aren't edited in place. **Void** the wrong one (it stays in the history, marked void, and no longer counts) and enter it again. A transaction dated in a [closed period](/ledger/reports/reports-and-closing/#closing-a-month) can't be changed until the books are reopened.

## Templates and recurring transactions

**Templates** saves transactions you repeat, like rent or payroll: start a new transaction from one in a click. A template can also **recur** (monthly, for example). Recurring ones never post by themselves: when one is due it appears at the top of the **Templates** page, on your OpenAppHub dashboard and in the [task summary](/hub/accounts/task-summary/), and you review each one and **post** or **skip** it.

## The words the app uses

Under **Settings**, **Wording** chooses how OpenLedgerApp talks, for everyone in your organization (owners and admins choose):

| Concept | Simplest | Simple | Double-entry |
|---|---|---|---|
| What you own | Money You Have | Accounts | Assets |
| What you owe | Money You Owe | Debts | Liabilities |
| What's left over | What's Yours (nonprofits: Net Assets) | Owner's Equity (Net Assets) | Equity (Net Assets) |
| Money coming in | Money In | Income | Revenue (nonprofits: Revenue & Support) |
| Money going out | Money Out | Expenses | Expenses |
| Entry sides | Increase / Decrease | Increase / Decrease | Debit / Credit |
| Income report | Income Statement (nonprofits: Money In & Out) | Income Statement (Income & Expenses) | Profit & Loss (Statement of Activities) |
| Position report | What You Have & Owe | Accounts Summary | Balance Sheet (Statement of Financial Position) |

The books are the same whichever you choose; only the words change. You can also rename single terms.
