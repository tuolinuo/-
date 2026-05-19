export default function MultiAgentAIDemo() {
  const sidebar = [
    'AI Dashboard',
    'Workflow Console',
    'Agent Monitor',
    'Token Analytics',
    'Knowledge Base',
    'Deployment Center',
  ];

  const agents = [
    {
      name: '需求分析 Agent',
      desc: '自动理解 PRD 与工单内容，自动拆解研发任务。',
      icon: '🧠',
    },
    {
      name: '架构设计 Agent',
      desc: '自动生成系统架构、数据库设计与技术方案。',
      icon: '🏗️',
    },
    {
      name: '编码 Agent',
      desc: '结合企业知识库与 RAG 自动生成高质量代码。',
      icon: '💻',
    },
    {
      name: '测试 Agent',
      desc: '自动生成测试用例并执行回归验证。',
      icon: '🧪',
    },
    {
      name: 'Review Agent',
      desc: '自动完成代码 Review、安全扫描与规范检查。',
      icon: '🔍',
    },
  ];

  const stats = [
    {
      label: '研发效率提升',
      value: '65%',
    },
    {
      label: 'Review 成本降低',
      value: '70%',
    },
    {
      label: '线上 Bug 率下降',
      value: '40%',
    },
    {
      label: '每日 Token 消耗',
      value: '800万+',
    },
  ];

  const dashboardCards = [
    {
      title: 'Active Agents',
      value: '24',
    },
    {
      title: 'Running Workflows',
      value: '132',
    },
    {
      title: 'Daily Tokens',
      value: '8.2M',
    },
    {
      title: 'Deploy Success',
      value: '99.2%',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-[300px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              企业级 Multi-Agent AI 开发平台
            </div>

            <h1 className="mb-8 text-6xl font-black leading-[0.95] tracking-[-0.04em] lg:text-8xl">
              下一代
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI 协同研发平台
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              基于 Multi-Agent Workflow、RAG 与长链路推理构建，
              实现需求分析、代码生成、自动测试与 AI Review 的完整研发闭环。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-500 px-7 py-4 font-bold text-black shadow-2xl shadow-cyan-500/30 transition hover:bg-cyan-400">
                立即体验 Demo
              </button>

              <button className="rounded-2xl border border-slate-700 px-7 py-4 text-slate-200 transition hover:border-cyan-400">
                查看架构文档
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(0,255,255,0.12)] backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">AI Workflow Engine</p>
                  <h3 className="mt-1 text-2xl font-bold">Multi-Agent Pipeline</h3>
                </div>

                <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="group flex items-start gap-4 rounded-3xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/5"
                  >
                    <div className="text-3xl">{agent.icon}</div>

                    <div>
                      <h4 className="text-lg font-semibold">{agent.name}</h4>
                      <p className="mt-1 text-sm text-slate-400">{agent.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[32px] border border-white/5 bg-white/[0.04] p-8 text-center shadow-[0_10px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
            >
              <div className="mb-3 text-4xl font-black text-cyan-400">
                {item.value}
              </div>

              <div className="text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">平台核心架构</h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            基于 Workflow Orchestration、RAG、Memory 与 Tool Calling 构建企业级 AI Agent 系统。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/5 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="mb-5 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold">长链路推理</h3>
            <p className="leading-7 text-slate-400">
              Agent 可跨多个阶段持续共享上下文，实现复杂研发流程自动化。
            </p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="mb-5 text-5xl">📚</div>
            <h3 className="mb-4 text-2xl font-bold">RAG 企业知识库</h3>
            <p className="leading-7 text-slate-400">
              自动检索代码仓库与历史 PR，显著降低 AI 幻觉率。
            </p>
          </div>

          <div className="rounded-[32px] border border-white/5 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="mb-5 text-5xl">🔐</div>
            <h3 className="mb-4 text-2xl font-bold">AI 安全治理</h3>
            <p className="leading-7 text-slate-400">
              支持权限隔离、Token 成本监控与代码安全审计。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_0_100px_rgba(0,255,255,0.08)] backdrop-blur-2xl lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">端到端 AI 研发闭环</h2>

              <p className="mb-8 text-lg leading-8 text-slate-300">
                从需求输入到自动生成 PR 与测试验证，全流程由多 Agent 自动协同完成。
              </p>

              <div className="space-y-4">
                {[
                  '自动拆解需求并生成研发任务',
                  'AI 自动生成架构方案与数据库设计',
                  '自动生成代码、测试与 API 文档',
                  '自动运行 CI/CD 与质量评估',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-400" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/50 p-8 font-mono text-sm shadow-2xl backdrop-blur-xl">
              <div className="mb-4 text-green-400">$ AI Workflow Running...</div>

              <div className="space-y-3 text-slate-300">
                <div>✔ Requirement Agent completed</div>
                <div>✔ Architecture Agent generated system design</div>
                <div>✔ Coding Agent created PR #2048</div>
                <div>✔ Test Agent generated 128 test cases</div>
                <div>✔ Review Agent passed code quality checks</div>
                <div className="text-cyan-400">→ Deployment Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-2xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Secure Enterprise Login
            </div>

            <h2 className="mb-4 text-4xl font-bold">AI 平台登录</h2>

            <p className="mb-8 text-slate-400">
              支持企业 SSO、GitHub OAuth 与权限隔离管理。
            </p>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  企业邮箱
                </label>

                <input
                  className="w-full rounded-2xl border border-slate-700 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
                  placeholder="admin@company.ai"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  密码
                </label>

                <input
                  type="password"
                  className="w-full rounded-2xl border border-slate-700 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
                  placeholder="••••••••••"
                />
              </div>

              <button className="w-full rounded-2xl bg-cyan-500 py-4 text-lg font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400">
                登录 AI 控制台
              </button>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button className="rounded-2xl border border-slate-700 py-3 transition hover:border-cyan-400">
                  GitHub 登录
                </button>

                <button className="rounded-2xl border border-slate-700 py-3 transition hover:border-cyan-400">
                  Google SSO
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <div className="grid min-h-[640px] grid-cols-[240px_1fr]">
              <div className="border-r border-white/5 bg-black/40 p-6 backdrop-blur-xl">
                <div className="mb-10 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 font-black text-black">
                    AI
                  </div>

                  <div>
                    <div className="font-bold">Agent Console</div>
                    <div className="text-xs text-slate-500">
                      Enterprise Edition
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {sidebar.map((item, index) => {
                    const active = index === 0;

                    return (
                      <div
                        key={item}
                        className={
                          active
                            ? 'cursor-pointer rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-black'
                            : 'cursor-pointer rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-slate-800'
                        }
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-b from-slate-900 to-black p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">AI Dashboard</h3>

                    <p className="mt-2 text-slate-400">
                      实时监控多 Agent 工作状态与 Token 消耗。
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-green-400">
                      System Healthy
                    </span>
                  </div>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-5">
                  {dashboardCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[28px] border border-white/5 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
                    >
                      <div className="mb-2 text-sm text-slate-400">
                        {card.title}
                      </div>

                      <div className="text-4xl font-black text-cyan-400">
                        {card.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-white/5 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="text-xl font-bold">Workflow Activity</h4>

                    <span className="text-sm text-slate-500">
                      Live Monitoring
                    </span>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl">
                      <span>Requirement Agent parsing PRD...</span>
                      <span className="text-green-400">Completed</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl">
                      <span>Code Agent generating API module...</span>
                      <span className="text-cyan-400">Running</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl">
                      <span>Test Agent executing regression tests...</span>
                      <span className="text-yellow-400">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-8 py-10 text-center text-slate-500 backdrop-blur-xl">
        © 2026 Multi-Agent AI Platform · Enterprise AI Engineering Demo
      </footer>
    </div>
  );
}
