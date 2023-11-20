import { Instagram } from 'lucide-react'

export default function Teste2() {
	return (
		<>
			<div>
				<img
					src="https://static.vecteezy.com/ti/vetor-gratis/p3/2184697-abstrato-azul-circuito-tecnologia-fundo-vetor.jpg"
					alt="bg"
					className="relative h-screen w-full"
				/>
				<div className="absolute inset-0">
					<header className="flex h-20 flex-col justify-center px-20">
						<div className="flex items-center justify-between">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
								alt="logo"
								className="h-10 w-10"
							/>
							<a href="#" className="text-white">
								<Instagram />
							</a>
						</div>
					</header>
					<main className="">
						<div className="flex items-center justify-center py-40">
							<div className="flex flex-col items-center justify-center gap-8 text-white">
								<p className="text-lg">NOSSO SITE SERÁ LANÇADO</p>
								<p className="text-center text-8xl">
									EM <br />
									BREVE
								</p>
								<p className="text-lg">FIQUE LIGADO!</p>
							</div>
						</div>
						<div className="flex h-full w-full items-center justify-center bg-white p-8 ">
							<div className="flex w-96 flex-col items-center justify-center gap-8">
								<div className="flex flex-col items-center justify-center gap-6">
									<h1 className="text-3xl">Sobre a TechCloud</h1>
									<p>
										Sou um parágrafo. Clique aqui para editar e adicionar o seu
										próprio texto. É fácil! Basta clicar em "Editar Texto" ou
										clicar duas vezes sobre mim e você poderá adicionar o seu
										próprio conteúdo.
									</p>
								</div>
								<div className="flex flex-col items-center justify-center gap-6">
									<h2 className="">
										Assine e seja o primeiro a ficar sabendo sobre o lançamento
									</h2>
									<div>
										<input
											type="text"
											placeholder="Insira seu email aqui"
											className="p-2"
										/>
										<button className="bg-blue-950 p-2 text-white">
											Participar
										</button>
									</div>
								</div>
								<div>
									<a href="#">
										<Instagram />
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
