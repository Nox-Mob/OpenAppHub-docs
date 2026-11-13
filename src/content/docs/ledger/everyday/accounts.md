---
title: "Accounts"
description: "Your chart of accounts: the five kinds, adding accounts with an opening balance, archiving, and choosing good names."
sidebar:
  order: 2
---

**Accounts** are the buckets your money is sorted into. Every transaction moves money between two or more of them. The **Accounts** page lists them all, grouped by kind, with their balances.

## The five kinds

What each is called depends on your organization's [wording](/ledger/everyday/transactions/#the-words-the-app-uses):

| Kind | Simplest wording | Double-entry wording | Examples |
|---|---|---|---|
| What you own | Money You Have | Assets | Checking account, savings, cash box, PayPal |
| What you owe | Money You Owe | Liabilities | Credit card, loan, money held for others |
| What's left over | What's Yours / Net Assets | Equity / Net Assets | Opening balances, accumulated surplus |
| Money coming in | Money In | Revenue (& Support) | Dues, donations, grants, event tickets |
| Money going out | Money Out | Expenses | Rent, supplies, printing, bank fees |

Balances are shown the way people expect: what you own and what you spend as positive numbers, what you owe and what comes in as positive too.

## Adding an account

On **Accounts**, fill in the row at the top:

| Field | |
|---|---|
| **Name** | What it is, as people say it: *Main checking*, *PayPal*, *Hall rental income* |
| **Type** | One of the five kinds |
| **Opening balance** | For an account you own or owe (a bank account, a card), what was in it when you start using OpenLedgerApp. It's recorded against your opening-balance equity account, so the books still balance. Leave it empty for income and expense accounts |

Owners, admins and treasurers can add accounts. **Settings**, **Accounts** has a list of common accounts to choose from instead of typing your own.

## Archiving

You can't delete an account that has transactions, because past reports must stay correct. **Archive** it instead, under **Settings**, **Accounts** (it says how many transaction lines use it; they stay intact): it's hidden from new transactions but stays in reports for the periods it was used. Archived accounts can be made active again there.

## Good names

- Name accounts the way your treasurer and board talk about them.
- One account per real bank account or card, so [reconciling](/ledger/everyday/import-and-reconcile/#reconcile) matches your statements.
- Keep income and expense accounts few and broad (*Program expenses*, not one per receipt). Use [projects, categories and tags](/ledger/nonprofit/funds-and-budgets/) for detail.
- Nonprofits: restricted money is tracked with **funds**, not separate bank accounts ([Funds and budgets](/ledger/nonprofit/funds-and-budgets/)).
