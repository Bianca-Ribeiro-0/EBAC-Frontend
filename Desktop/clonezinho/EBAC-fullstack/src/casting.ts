namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    
    let nome: string = 34 as unknown as string;
}
