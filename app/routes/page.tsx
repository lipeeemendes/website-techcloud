import { Container } from '~/components/container'

export default function Page() {
	return (
		<>
			<div className="h-screen bg-violet-800">
				<Container>
					<nav className="p-4 text-white">
						<div className="flex items-center justify-between">
							Logo
							<ul className="flex gap-2">
								<li>Articles</li>
								<li>Docs</li>
								<li>Community</li>
								<li>Status</li>
								<li>Pricing</li>
							</ul>
							<div className="flex gap-2">
								<button>Sign In</button>
								<button>Sign Up</button>
							</div>
						</div>
					</nav>
					<div className="mt-40 grid grid-cols-2 gap-10 text-white">
						<div>
							<h1 className="">Teste</h1>
							<p>
								O Mercedes-AMG G 63 significa potência à primeira vista: a grade
								do radiador específica da AMG, as rodas de 55,9 cm (22")
								disponíveis como opção, assim como o marcante sistema de escape
								AMG Performance, com duas ponteiras duplas cromadas de ambos os
								lados, conferem a este objeto de culto o seu exterior
								extrovertido.
							</p>
						</div>
						<div>
							<img
								src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202307/20230713/mercedesbenz-g-63-amg-4.0-v8-turbo-gasolina-magno-edition-4matic-speedshift-WMIMAGEM23135077479.jpg?s=fill&w=249&h=186&q=70"
								alt=""
							/>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}
