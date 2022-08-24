use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod calculator {
    use super::*;

    pub fn create(ctx: Context<Create>, message: String) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.message = message;
        Ok(())
    }

    pub fn add(ctx: Context<CalculatorOperation>, a: i64, b: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = a + b;
        Ok(())
    }

    pub fn sub(ctx: Context<CalculatorOperation>, a: i64, b: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = a - b;
        Ok(())
    }

    pub fn mul(ctx: Context<CalculatorOperation>, a: i64, b: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = a * b;
        Ok(())
    }

    pub fn div(ctx: Context<CalculatorOperation>, a: i64, b: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = a / b;
        calculator.remainder = a % b;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer=user, space=100)]
    pub calculator: Account<'info, Calculator>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Calculator {
    pub message: String,
    pub result: i64,
    pub remainder: i64,
}

#[derive(Accounts)]
pub struct CalculatorOperation<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}
