var documenterSearchIndex = {"docs":
[{"location":"ode_def/#The-ode_def-macro","page":"The ode_def macro","title":"The ode_def macro","text":"","category":"section"},{"location":"ode_def/","page":"The ode_def macro","title":"The ode_def macro","text":"ParameterizedFunctions.@ode_def\nParameterizedFunctions.@ode_def_bare\nParameterizedFunctions.@ode_def_all","category":"page"},{"location":"ode_def/#ParameterizedFunctions.@ode_def","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def","text":"@ode_def name begin\n    differential equation\nend parameters :: ODEFunction\n\nDefinition of the Domain-Specific Language (DSL)\n\nA helper macro is provided to make it easier to define a ParameterizedFunction, and it will symbolically compute a bunch of extra functions to make the differential equation solvers run faster. For example, to define the previous LotkaVolterra, you can use the following command:\n\nf = @ode_def LotkaVolterra begin\n    dx = a * x - b * x * y\n    dy = -c * y + d * x * y\nend a b c d\n\nor you can define it anonymously:\n\nf = @ode_def begin\n    dx = a * x - b * x * y\n    dy = -c * y + d * x * y\nend a b c d\n\n@ode_def uses ModelingToolkit.jl internally and returns an ODEFunction with the extra definitions (Jacobian, parameter Jacobian, etc.) defined through the MTK symbolic tools.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#ParameterizedFunctions.@ode_def_bare","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def_bare","text":"@ode_def_bare name begin\n    differential equation\nend parameters :: ODEFunction\n\nLike @ode_def but the opts options are set so that no symbolic functions are generated. See the @ode_def docstring for more details.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#ParameterizedFunctions.@ode_def_all","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def_all","text":"@ode_def_all name begin\n    differential equation\nend parameters :: ODEFunction\n\nLike @ode_def but the opts options are set so that all possible symbolic functions are generated. See the @ode_def docstring for more details.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#Internal-API","page":"The ode_def macro","title":"Internal API","text":"","category":"section"},{"location":"ode_def/","page":"The ode_def macro","title":"The ode_def macro","text":"ParameterizedFunctions.ode_def_opts","category":"page"},{"location":"ode_def/#ParameterizedFunctions.ode_def_opts","page":"The ode_def macro","title":"ParameterizedFunctions.ode_def_opts","text":"ode_def_opts(name::Symbol, opts::Dict{Symbol, Bool}, curmod, ex::Expr, params...;\n             depvar = :t)\n\nThe core internal. Users should only interact with this through the @ode_def_* macros.\n\nOptions are self-explanatory by name mapping to ODEFunction:\n\nbuild_tgrad\nbuild_jac\nbuild_expjac\nbuild_invjac\nbuild_invW\nbuildinvWt\nbuild_hes\nbuild_invhes\nbuild_dpfuncs\n\ndepvar sets the symbol for the dependent variable.\n\nExample:\n\nopts = Dict{Symbol, Bool}(:build_tgrad => true,\n                          :build_jac => true,\n                          :build_expjac => false,\n                          :build_invjac => true,\n                          :build_invW => true,\n                          :build_invW_t => true,\n                          :build_hes => false,\n                          :build_invhes => false,\n                          :build_dpfuncs => true)\n\n\n\n\n\n","category":"function"},{"location":"#ParameterizedFunctions.jl:-Simple-High-Level-ODE-Definitions","page":"Home","title":"ParameterizedFunctions.jl: Simple High-Level ODE Definitions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ParameterizedFunctions.jl is a component of the SciML ecosystem which allows for easily defining parameterized ODE models in a simple syntax.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install ParameterizedFunctions.jl, use the Julia package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"ParameterizedFunctions\")","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using DifferentialEquations, ParameterizedFunctions\n\n# Non-Stiff ODE\n\nlotka_volterra = @ode_def begin\n    d🐁 = α * 🐁 - β * 🐁 * 🐈\n    d🐈 = -γ * 🐈 + δ * 🐁 * 🐈\nend α β γ δ\n\np = [1.5, 1.0, 3.0, 1.0];\nu0 = [1.0; 1.0];\nprob = ODEProblem(lotka_volterra, u0, (0.0, 10.0), p)\nsol = solve(prob, Tsit5(), reltol = 1e-6, abstol = 1e-6)\n\n# Stiff ODE\n\nrober = @ode_def begin\n    dy₁ = -k₁ * y₁ + k₃ * y₂ * y₃\n    dy₂ = k₁ * y₁ - k₂ * y₂^2 - k₃ * y₂ * y₃\n    dy₃ = k₂ * y₂^2\nend k₁ k₂ k₃\n\nprob = ODEProblem(rober, [1.0, 0.0, 0.0], (0.0, 1e5), [0.04, 3e7, 1e4])\nsol = solve(prob)","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please refer to the SciML ColPrac: Contributor's Guide on Collaborative Practices for Community Packages for guidance on PRs, issues, and other matters relating to contributing to SciML.\nThere are a few community forums:\nthe #diffeq-bridged channel in the Julia Slack\nJuliaDiffEq on Gitter\non the Julia Discourse forums\nsee also SciML Community page","category":"page"},{"location":"#Reproducibility","page":"Home","title":"Reproducibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<details><summary>The documentation of this SciML package was built using these direct dependencies,</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg # hide\nPkg.status() # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"<details><summary>and using this machine and Julia version.</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using InteractiveUtils # hide\nversioninfo() # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"<details><summary>A more complete overview of all dependencies and their versions is also provided.</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg # hide\nPkg.status(; mode = PKGMODE_MANIFEST) # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also download the \n<a href=\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TOML\nversion = TOML.parse(read(\"../../Project.toml\", String))[\"version\"]\nname = TOML.parse(read(\"../../Project.toml\", String))[\"name\"]\nlink = \"https://github.com/SciML/\" * name * \".jl/tree/gh-pages/v\" * version *\n       \"/assets/Manifest.toml\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"\">manifest</a> file and the\n<a href=\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TOML\nversion = TOML.parse(read(\"../../Project.toml\", String))[\"version\"]\nname = TOML.parse(read(\"../../Project.toml\", String))[\"name\"]\nlink = \"https://github.com/SciML/\" * name * \".jl/tree/gh-pages/v\" * version *\n       \"/assets/Project.toml\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"\">project</a> file.","category":"page"}]
}
