import assert from 'assert';
import * as anchor from '@project-serum/anchor';
const {AnchorProvider, web3} = anchor;
const { SystemProgram } = anchor.web3;

describe('calculator dapp', () => {
    const provider = AnchorProvider.local();
    anchor.setProvider(provider)
    const calculator = anchor.web3.Keypair.generate()
    const program = anchor.workspace.Calculator
    // console.log(calculator.publicKey.toString())

    it('creates a calculator', async() => {
        await program.rpc.create("Calculator Account Initiated", {
            accounts: {
                calculator: calculator.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId
            },
            signers: [calculator]
        })

        const account = await program.account.calculator.fetch(calculator.publicKey)
        console.log(account.message)
        // console.log("account.result = ",account.result.toString())
    })

    it('adds two numbers', async() => {
        await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })

        const account = await program.account.calculator.fetch(calculator.publicKey)
        console.log("2 + 3 = ",account.result.toString())
    })

    it('subtracts two numbers', async() => {
        await program.rpc.sub(new anchor.BN(2), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })

        const account = await program.account.calculator.fetch(calculator.publicKey)
        console.log("2 - 3 = ",account.result.toString())
    })

    it('multiplies two numbers', async() => {
        await program.rpc.mul(new anchor.BN(2), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })

        const account = await program.account.calculator.fetch(calculator.publicKey)
        console.log("2 * 3 = ",account.result.toString())
    })

    it('divides two numbers', async() => {
        await program.rpc.div(new anchor.BN(2), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })

        const account = await program.account.calculator.fetch(calculator.publicKey)
        console.log("2 / 3 = ",account.result.toString())
        console.log("2 % 3 = ",account.remainder.toString())
    })
})