var documenterSearchIndex = {"docs":
[{"location":"ode_def/#The-ode_def-macro","page":"The ode_def macro","title":"The ode_def macro","text":"","category":"section"},{"location":"ode_def/","page":"The ode_def macro","title":"The ode_def macro","text":"ParameterizedFunctions.@ode_def\nParameterizedFunctions.@ode_def_bare\nParameterizedFunctions.@ode_def_all","category":"page"},{"location":"ode_def/#ParameterizedFunctions.@ode_def","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def","text":"@ode_def name begin\n    differential equation\nend parameters :: ODEFunction\n\nDefinition of the Domain-Specific Language (DSL)\n\nA helper macro is provided to make it easier to define a ParameterizedFunction, and it will symbolically compute a bunch of extra functions to make the differential equation solvers run faster. For example, to define the previous LotkaVolterra, you can use the following command:\n\nf = @ode_def LotkaVolterra begin\n    dx = a*x - b*x*y\n    dy = -c*y + d*x*y\nend a b c d\n\nor you can define it anonymously:\n\nf = @ode_def begin\n    dx = a*x - b*x*y\n    dy = -c*y + d*x*y\nend a b c d\n\n@ode_def uses ModelingToolkit.jl internally and returns an ODEFunction with the extra definitions (Jacobian, parameter Jacobian, etc.) defined through the MTK symbolic tools.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#ParameterizedFunctions.@ode_def_bare","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def_bare","text":"@ode_def_bare name begin\n    differential equation\nend parameters :: ODEFunction\n\nLike @ode_def but the opts options are set so that no symbolic functions are generated. See the @ode_def docstring for more details.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#ParameterizedFunctions.@ode_def_all","page":"The ode_def macro","title":"ParameterizedFunctions.@ode_def_all","text":"@ode_def_all name begin\n    differential equation\nend parameters :: ODEFunction\n\nLike @ode_def but the opts options are set so that all possible symbolic functions are generated. See the @ode_def docstring for more details.\n\n\n\n\n\n","category":"macro"},{"location":"ode_def/#Internal-API","page":"The ode_def macro","title":"Internal API","text":"","category":"section"},{"location":"ode_def/","page":"The ode_def macro","title":"The ode_def macro","text":"ParameterizedFunctions.ode_def_opts","category":"page"},{"location":"ode_def/#ParameterizedFunctions.ode_def_opts","page":"The ode_def macro","title":"ParameterizedFunctions.ode_def_opts","text":"ode_def_opts(name::Symbol,opts::Dict{Symbol,Bool},curmod,ex::Expr,params...;depvar=:t)\n\nThe core internal. Users should only interact with this through the @ode_def_* macros.\n\nOptions are self-explanatory by name mapping to ODEFunction:\n\nbuild_tgrad\nbuild_jac\nbuild_expjac\nbuild_invjac\nbuild_invW\nbuildinvWt\nbuild_hes\nbuild_invhes\nbuild_dpfuncs\n\ndepvar sets the symbol for the dependent variable.\n\nExample:\n\nopts = Dict{Symbol,Bool}(\n      :build_tgrad => true,\n      :build_jac => true,\n      :build_expjac => false,\n      :build_invjac => true,\n      :build_invW => true,\n      :build_invW_t => true,\n      :build_hes => false,\n      :build_invhes => false,\n      :build_dpfuncs => true)\n\n\n\n\n\n","category":"function"},{"location":"#ParameterizedFunctions.jl:-Simple-High-Level-ODE-Definitions","page":"Home","title":"ParameterizedFunctions.jl: Simple High Level ODE Definitions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ParameterizedFunctions.jl is a component of the SciML ecosystem which allows for easily defining parameterized ODE models in a simple syntax.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install ParameterizedFunctions.jl, use the Julia package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"ParameterizedFunctions\")","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please refer to the SciML ColPrac: Contributor's Guide on Collaborative Practices for Community Packages for guidance on PRs, issues, and other matters relating to contributing to SciML.\nThere are a few community forums:\nthe #diffeq-bridged channel in the Julia Slack\nJuliaDiffEq on Gitter\non the Julia Discourse forums\nsee also SciML Community page","category":"page"}]
}